"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSessionContext } from "@supabase/auth-helpers-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { splitSchema } from "@/lib/validations/split"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

type FormData = z.infer<typeof splitSchema>

interface Props {
  user_id: string
  split_group_id: string
  setOpen: (open: boolean) => void
}

export default function SplitAddForm({
  user_id,
  split_group_id,
  setOpen,
}: Props) {
  const { supabaseClient } = useSessionContext()

  const [uploading, setUploading] = useState(false)

  const router = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(splitSchema),
    defaultValues: {
      name: "",
      user_id: user_id,
      split_group_id: split_group_id,
    },
  })

  async function onSubmit(data: FormData) {
    try {
      setUploading(true)

      const { error: insertError } = await supabaseClient
        .from("split")
        .insert([
          {
            name: data.name,
            user_id: user_id,
            split_group_id: split_group_id,
          },
        ])
        .select()

      if (insertError) {
        console.log(insertError)

        return toast({
          title: "Something went wrong.",
          description: "No update was made.",
          variant: "destructive",
        })
      }

      toast({
        description: "Your changes have been updated.",
      })

      setOpen(false)

      router.refresh()
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to add split",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Split Name</FormLabel>
              <FormControl>
                <Input placeholder="Push Day..." type="text" {...field} />
              </FormControl>
              <FormDescription>Enter the split name here.</FormDescription>
              {form.formState.errors.name && (
                <FormMessage>{form.formState.errors.name.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <Button disabled={uploading} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
