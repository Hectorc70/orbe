'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import ApiService from '@/backend/userService';
import { IUser } from '@/models/userModel';
import { showToast } from 'nextjs-toast-notify';
import { useRouter } from 'next/navigation';
import { CANCELLED_REQUEST } from '@/backend/errors.util';
import { useForm } from 'react-hook-form';
import FormInput from '@/components/ui/inputForm';

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUser>();
  const onSubmit = async (data: IUser) => {
    try {
      const response = await ApiService.createUser(data);
      showToast.success('Account created successfully');
      router.push('/');
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
          <CardTitle className="text-2xl">Create an Account</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              label="Username"
              name="username"
              type="text"
              placeholder="Username"
              register={register('username', {
                required: 'Email is required',
                validate: (value: string) => {
                  if (value && value.includes(' ')) {
                    return 'The username cannot contain spaces';
                  }
                  return true;
                }
              })}
              error={errors.username}
            />
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
              Create Account
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
