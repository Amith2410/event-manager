'use server';

/**
 * @fileOverview AI-powered event summarization flow.
 *
 * - summarizeEvent - A function that generates a concise summary for a given event description.
 * - EventSummaryInput - The input type for the summarizeEvent function.
 * - EventSummaryOutput - The return type for the summarizeEvent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EventSummaryInputSchema = z.object({
  eventDescription: z
    .string()
    .describe('The full description of the event to be summarized.'),
});
export type EventSummaryInput = z.infer<typeof EventSummaryInputSchema>;

const EventSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary or blurb of the event description.'),
});
export type EventSummaryOutput = z.infer<typeof EventSummaryOutputSchema>;

export async function summarizeEvent(input: EventSummaryInput): Promise<EventSummaryOutput> {
  return summarizeEventFlow(input);
}

const prompt = ai.definePrompt({
  name: 'eventSummaryPrompt',
  input: {schema: EventSummaryInputSchema},
  output: {schema: EventSummaryOutputSchema},
  prompt: `You are an expert event summarizer, tasked with creating engaging blurbs for social media.

  Given the event description below, generate a short, attention-grabbing summary that highlights the key aspects of the event to attract potential attendees.

  Event Description: {{{eventDescription}}}`,
});

const summarizeEventFlow = ai.defineFlow(
  {
    name: 'summarizeEventFlow',
    inputSchema: EventSummaryInputSchema,
    outputSchema: EventSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
