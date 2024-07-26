"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const NoticeDialog = () => {
  const [open, setOpen] = useState(true);
  const [countDown, setCountDown] = useState(10);
  const disabled = countDown == 0 ? false : true;

  useEffect(() => {
    if (countDown > 0) {
      const timer = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countDown]);

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Little Notice</AlertDialogTitle>
          <AlertDialogDescription className="text-xl">
            Please note that i am using a very limited cloudinary resources, so
            if you can&apos;t make image transformation then that means that my
            account balance is empty
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            disabled={disabled}
            onClick={() => {
              setOpen(false);
            }}
            className="bg-purple-600"
          >
            Ok I Understand {disabled && `(${countDown}s)`}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NoticeDialog;
