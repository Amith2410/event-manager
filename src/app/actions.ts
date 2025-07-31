'use server';

import { summarizeEvent } from '@/ai/flows/event-summary-generator';

interface FormState {
  summary?: string;
  error?: string;
}

export async function generateSummaryAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const description = formData.get('description');

  if (!description || typeof description !== 'string') {
    return { error: 'Invalid event description provided.' };
  }

  try {
    const result = await summarizeEvent({ eventDescription: description });
    if (result.summary) {
      return { summary: result.summary };
    }
    return { error: 'Failed to generate summary.' };
  } catch (e) {
    const error = e instanceof Error ? e.message : 'An unexpected error occurred.';
    console.error(e);
    return { error };
  }
}
