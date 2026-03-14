// src/Button.tsx
import React from 'react'
export function Button({ label }: { label: string }) {
  return <button>{label}</button>;
}

export function SubmitButton() {
  return <Button label="Submit" />;
}

export function CancelButton() {
  return <Button label="Cancel" />;
}

export function SaveButton() {
  return <Button label="Save" />;
}

export function DeleteButton() {
  return <Button label="Delete" />;
}

export function ResetButton() {
  return <Button label="Reset" />;
}
