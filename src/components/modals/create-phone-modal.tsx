"use client";

import { addPhone } from "@/actions/phone";
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
import { useCreatePhoneModal } from "@/hooks/use-create-phone-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1).trim(),
  price: z.number().int().positive(),
});

export const CreatePhoneModal = () => {
  const createPhone = useCreatePhoneModal();
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      price: 1,
    },
  });

  const loading = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof schema>) => {
    addPhone(values.name, values.price)
      .then((data) => {
        router.push(`/phone/${data?.id}`);
        router.refresh();
        toast.success(`${data?.name}を追加しました！`);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`操作中にエラーが起きました。もう一度試してみてください。`);
      });
    createPhone.onClose();
  };

  return (
    <Modal
      isOpen={createPhone.isOpen}
      onClose={createPhone.onClose}
      title="Create New Phone"
      description="enter new phone information."
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
                {/* <FormMessage className="text-rose-500" /> */}
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => createPhone.onClose()}
              disabled={loading}
              type="button"
            >
              Cancel
            </Button>
            <Button variant="secondary" disabled={loading} type="submit">
              Create
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
