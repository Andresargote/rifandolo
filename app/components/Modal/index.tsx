'use client';

import { createPortal } from 'react-dom';

type ModalProps = {
  opened: boolean;
};

export function Modal({ opened }: ModalProps) {
  if (!opened) return null;

  return createPortal(
    <div
      role='dialog'
      className='fixed inset-0 z-10 flex items-center justify-center'
      aria-modal='true'
    >
      <p>This is a modal</p>
    </div>,
    document.body
  );
}
