"use client";

import
{ zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {useNavigate} from "react-router-dom";
import {Button, Input} from "@/components/ui";
import {postUserRegister} from "@/client";
import {useUser} from "@/context/UserContext";
import {data} from "autoprefixer";




const formSchema = z.object({
    username: z.string().min(3, {
        message: "Username must be at least 3 characters.",
    }),
    email: z.string().email(),

    password: z
        .string()
        .min(8, {
            message: "Password must be at least 8 characters.",
        })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).+$/, {
            message: "Password must contain at least one uppercase letter, one lowercase letter, and one number. Mustn't contain spaces.",
        }),
});





interface ProfileFormProps {
    onClose: () => void;
}

export function ProfileForm({ onClose }: ProfileFormProps) {
    const { setUser } = useUser();

    const routeTo = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    interface Token {
        token: string;
        expires: string;
    }

    interface UserResponse {
        tokens: {
            access: Token;
            refresh: Token;
        };
    }


    async function onSubmit(values: z.infer<typeof formSchema>) {
        // const routeTo = useNavigate();

        try {
            const response = await postUserRegister({
                body: {
                    username: values.username,
                    email: values.email,
                    password: values.password
                }
            });

            if (response.data && response.data.tokens) {
                const { tokens } = response.data;
                if (tokens?.access !== undefined && tokens.refresh !== undefined){
                    if (tokens.access.token && tokens.refresh.token) {
                        setUser({
                            access: {
                                token: tokens.access.token,
                                expires: tokens.access.expires
                            },
                            refresh: {
                                token: tokens.refresh.token,
                                expires: tokens.refresh.expires
                            }
                        });
                        console.log("token__ " + tokens.access.token)
                        console.log("expires at " + tokens.access.expires)
                    } else {
                        console.error("Токены отсутствуют в ответе сервера");
                    }
                }


                console.log('Пользователь успешно зарегистрирован:', response.data);
                onClose();
                console.log()
            } else {
                throw new Error("Ответ от сервера не содержит данных или токенов.");
            }
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
        }
    }



    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 " onClick={onClose}>
            <div className=" p-6 rounded-xl shadow-lg shadow-black border border-black w-full bg-white opacity-1 text-black max-w-md mx-auto text-left  z-1000" onClick={(e) => e.stopPropagation()}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <h1 className={'text-2xl font-thin text-left ml-2 text-black  '}> Log in </h1>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={'ml-1'}>Login</FormLabel>
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
                                    <FormLabel className={'ml-1'}>Email</FormLabel>
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
                                    <FormLabel className={'ml-1'}>Password</FormLabel>
                                    <FormControl>
                                        <Input className={'rounded-xl w-full font-light bg-gray-50'} placeholder="********" {...field} />
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