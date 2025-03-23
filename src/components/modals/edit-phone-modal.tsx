"use client";

import { editPhone } from "@/actions/phone";
import { Modal } from "@/components/modal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEditPhoneModal } from "@/hooks/use-edit-phone-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1).trim(),
  price: z.number().int().positive(),
});

export const EditPhoneModal = () => {
  const editPhoneModal = useEditPhoneModal();
  const router = useRouter();
  const phone = editPhoneModal.data!;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      price: 1,
    },
  });

  useEffect(() => {
    if (phone) {
      form.setValue("name", phone.name);
      form.setValue("price", phone.price);
    }
  }, [phone, form]);

  const loading = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof schema>) => {
    editPhone(phone.id, values.name, values.price)
      .then(() => {
        router.push(`/phone/${phone.id}`);
        router.refresh();
        toast.success(`電話の情報を更新しました！`);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`操作中にエラーが起きました。もう一度試してみてください。`);
      });
    editPhoneModal.onClose();
  };

  return (
    <Modal
      isOpen={editPhoneModal.isOpen}
      onClose={editPhoneModal.onClose}
      title="Edit New Phone"
      description="enter the phone information."
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="Name" {...field} />
                </FormControl>
                <FormDescription>空白は許可されません</FormDescription>
                <FormMessage className="text-rose-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="Pricing" {...field} />
                </FormControl>
                <FormDescription>
                  金額を指定してください。0より大きい整数のみ指定できます。
                </FormDescription>
                <FormMessage className="text-rose-500" />
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => editPhoneModal.onClose()}
              disabled={loading}
              type="button"
            >
              Cancel
            </Button>
            <Button variant="secondary" disabled={loading} type="submit">
              Edit
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
