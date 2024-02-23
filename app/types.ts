export type InvoicesFormState = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
    message?: string | null;
  };
};
