'use client'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { showToast } from 'nextjs-toast-notify';

import { Button } from '@/components/ui/button';            // con isLoading
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import ApiService from '@/backend/userService';
import { CANCELLED_REQUEST } from '@/backend/errors.util';
import FormInput from '@/components/ui/inputForm';
import { useGlobalStore } from '@/stores/useGlobalStore';

type FormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const setUser = useGlobalStore((state) => state.setUser)
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await ApiService.login(data.email, data.password);
      const user = await ApiService.getUser()
      debugger
      setUser(user)
      router.push('/dashboard');
    } catch (error: any) {
      if (error !== CANCELLED_REQUEST) {
        showToast.error(error?.message ?? error?.toString?.() ?? 'Error desconocido');
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto">
            <Logo />
          </div>
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="email@example.com"
              register={register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email format',
                }
              })}
              error={errors.email}
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="******"
              register={register('password', {
                required: 'Password is required',
                validate: (value: string) => {
                  if (value && value.includes(' ')) {
                    return 'The password cannot contain spaces';
                  }
                  return true;
                }
              })}
              error={errors.password}
            />

            <Button
              type="submit"
              className="w-full !mt-6"
              isLoading={isSubmitting}
              loadingText="Signing in..."
            >
              Login
            </Button>
            {/* < ButtonSmall type="submit" onClick={handleSubmit(onSubmit)} status={isSubmitting ? StatusButton.Loading : StatusButton.Enabled}>Login</ButtonSmall> */}
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div >
  );
}
