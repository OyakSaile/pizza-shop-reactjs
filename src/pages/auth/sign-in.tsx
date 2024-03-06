import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

const signForm = z.object({
  email: z.string().email(),
})

type SignForm = z.infer<typeof signForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignForm>({
    resolver: zodResolver(signForm),
  })

  const handleSign = async (data: SignForm) => {
    console.log(data)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast.success('Enviamos um link de autenticação para o seu e-mail.', {
      action: {
        label: 'Reenviar',
        onClick: () => {
          handleSign(data)
        },
      },
    })
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSign)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input {...register('email')} id="email" type="email" />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
