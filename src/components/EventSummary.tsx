'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateSummaryAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Loader2, Sparkles } from 'lucide-react';
import React from 'react';

interface EventSummaryProps {
  description: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Social Blurb with AI
        </>
      )}
    </Button>
  );
}

export function EventSummary({ description }: EventSummaryProps) {
  const initialState = { summary: undefined, error: undefined };
  const [state, formAction] = useFormState(generateSummaryAction, initialState);

  return (
    <div>
      <h2 className="font-headline text-2xl font-semibold mb-4">AI Social Media Blurb</h2>
      <Card>
        <CardHeader>
            <CardTitle className="text-lg font-headline">Attract Attendees</CardTitle>
            <CardDescription>Use AI to create a short, engaging blurb for social media.</CardDescription>
        </CardHeader>
        <CardContent>
            <form action={formAction}>
                <input type="hidden" name="description" value={description} />
                <SubmitButton />
            </form>
        </CardContent>
      </Card>
      
      {state.summary && (
        <Card className="mt-4 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg font-headline text-primary flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Generated Blurb
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{state.summary}</p>
          </CardContent>
        </Card>
      )}
      {state.error && (
        <Card className="mt-4 border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-lg text-destructive">Error</CardTitle>
            <CardDescription className="text-destructive/80">{state.error}</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}
