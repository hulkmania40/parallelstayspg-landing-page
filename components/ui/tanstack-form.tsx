import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

// Form context for passing form instance to child components
const FormContext = React.createContext<any>(null);

export function useFormContext() {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a Form component");
  }
  return context;
}

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  form: any; // TanStack form instance
}

export function Form({ form, className, children, ...props }: FormProps) {
  return (
    <FormContext.Provider value={form}>
      <form
        className={cn("space-y-6", className)}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        {...props}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}

interface FormFieldProps {
  name: string;
  children: (field: any) => React.ReactNode;
  form: any;
}

export function FormField({ name, children, form }: FormFieldProps) {
  return form.Field({
    name,
    children: (field: any) => children(field),
  });
}

export function FormItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-2", className)} {...props} />;
}

export function FormLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <Label className={cn("text-sm font-medium", className)} {...props} />;
}

export function FormControl({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative", className)} {...props} />;
}

export function FormDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

export function FormMessage({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  if (!children) return null;
  return (
    <p className={cn("text-sm font-medium text-destructive", className)} {...props}>
      {children}
    </p>
  );
}