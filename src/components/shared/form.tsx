"use client";

import
{ zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui";
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
import {postUserRegister} from "@/client";
import {useNavigate} from "react-router-dom";




const formSchema = z.object({
    login: z.string().min(3, {
        message: "Username must be at least 3 characters.",
    }),
    email: z.string().min(6,{
        message: "Email must be at least 6 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    })
});

interface ProfileFormProps {
    onClose: () => void;
}

export function ProfileForm({ onClose }: ProfileFormProps) {
    const routeTo = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            login: "",
            email: "",
            password: "",
        },
    });



    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await postUserRegister({
                body: {
                    username: values.login,
                    email: values.email,
                    password: values.password
                }
            });

            console.log('Пользователь успешно зарегистрирован:', response.data);
            onClose();
        } catch (error) {
            console.error('Ошибка при регистрации:', error);

        }
        routeTo('/pages/account-page');
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-black" onClick={onClose}>
            <div className=" p-6 rounded-xl shadow-lg shadow-black border border-black w-full bg-white opacity-100 max-w-md mx-auto z-1000" onClick={(e) => e.stopPropagation()}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <h1 className={'text-2xl font-thin text-left ml-2 text-black  '}> Log in </h1>
                        <FormField
                            control={form.control}
                            name="login"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Login</FormLabel>
                                    <FormControl>
                                        <Input className={'rounded-xl w-full font-light bg-gray-50'} placeholder="накалякай нейм" {...field} />
                                    </FormControl>

                                    <FormDescription>
                                        <FormMessage />
                                    </FormDescription>

                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input className={'rounded-xl w-full font-light bg-gray-50'} placeholder="example@example.com" {...field} />
                                    </FormControl>

                                    <FormDescription>
                                        <FormMessage />
                                    </FormDescription>

                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input className={'rounded-xl w-full font-light bg-gray-50'} placeholder="накалякай нейм" {...field} />
                                    </FormControl>

                                    <FormDescription>
                                        <FormMessage />
                                    </FormDescription>

                                </FormItem>
                            )}
                        />

                        <Button type="submit"  className={'hover:shadow-black/50 shadow-md'}>Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
