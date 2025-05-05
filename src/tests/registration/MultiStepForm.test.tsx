import React from "react";
import {render, screen, waitFor} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {UserStoreProvider} from "../../features/registration/store/userStoreProvider";
import userEvent from '@testing-library/user-event';
import MultiStepForm from "../../features/registration/components/MultiStepForm";


function renderWithProvider() {
  return render(
    <UserStoreProvider>
      <MultiStepForm/>
    </UserStoreProvider>
  )
}

describe('MultiStepForm', () => {
  it('renders user details form initially', async (): Promise<void> => {
    renderWithProvider();

    const firstNameInput = await screen.findByLabelText(/First Name/i);
    const lastNameInput = await screen.findByLabelText(/Last Name/i);
    const emailInput = await screen.findByLabelText(/Email/i);

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    expect(screen.queryByRole('button', {name: /Back/i})).not.toBeInTheDocument();
    expect(screen.queryByRole('button', {name: /Next/i})).toBeInTheDocument();
  });

  it('shows validation messages on empty submit (Step 1)', async (): Promise<void> => {
    renderWithProvider();

    const nextButton: HTMLElement = await screen.findByRole('button', {name: /Next/i});

    await userEvent.click(nextButton);

    await waitFor(() => {
      const errors: HTMLElement[] = screen.queryAllByText(/is required/i);
      expect(errors).toHaveLength(3);
    });
  });

  it('navigates through all steps and submits', async (): Promise<void> => {
    renderWithProvider();

    // Step 1
    expect(await screen.findByLabelText(/First Name/i)).toBeInTheDocument()
    await userEvent.type(screen.getByLabelText(/First Name/i), 'John');
    await userEvent.type(screen.getByLabelText(/Last Name/i), 'Doe');
    await userEvent.type(screen.getByLabelText(/Email/i), 'john@example.com');
    expect(screen.queryByRole('button', {name: /Back/i})).not.toBeInTheDocument();
    expect(screen.queryByRole('button', {name: /Next/i})).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', {name: /Next/i}));

    // Step 2
    expect(await screen.findByLabelText(/Street/i)).toBeInTheDocument()
    await userEvent.type(screen.getByLabelText(/Street/i), '123 Main St');
    await userEvent.type(screen.getByLabelText(/City/i), 'Metropolis');
    await userEvent.type(screen.getByLabelText(/State/i), 'NY');
    await userEvent.type(screen.getByLabelText(/Zip Code/i), '12345');
    expect(screen.queryByRole('button', {name: /Back/i})).toBeInTheDocument();
    expect(screen.queryByRole('button', {name: /Next/i})).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', {name: /Next/i}));

    // Step 3
    expect(await screen.findByLabelText(/Username/i)).toBeInTheDocument();
    await userEvent.type(screen.getByLabelText(/Username/i), 'johndoe');
    await userEvent.type(screen.getByLabelText(/Password/i), 'ComplexPass123!');
    expect(screen.queryByRole('button', {name: /Back/i})).toBeInTheDocument();
    expect(screen.queryByRole('button', {name: /Next/i})).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', {name: /Next/i}));

    // Step 4 - Review
    expect(await screen.findByText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Street')).toBeInTheDocument();
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('Metropolis')).toBeInTheDocument();
    expect(screen.getByText('State')).toBeInTheDocument();
    expect(screen.getByText('NY')).toBeInTheDocument();
    expect(screen.getByText('Zip Code')).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', {name: /Confirm & Submit/i}));

    expect(await waitFor(() => screen.findByText(/Registration Successful!/i))).toBeInTheDocument();
  });
});
