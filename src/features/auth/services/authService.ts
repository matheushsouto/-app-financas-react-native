import { sendPasswordResetEmail, signInWithEmailAndPassword, 
    type AuthError } from 'firebase/auth';
import { SignInInput } from '../types';
import { auth } from '../../../lib/firebase';

const ERROR_MESSAGES: Record<string, string> = {
    'auth/invalid-email': 'E-mail inválido.',
    'auth/invalid-credential': 'E-mail ou senha incorretos.',
    'auth/user-not-found': 'E-mail ou senha incorretos.',
    'auth/wrong-password': 'E-mail ou senha incorretos.',
    'auth/too-many-requests': 'Muitas tentativas. Tente novamente',
    'auth/network-request-failed': 'Falha na conexão. Verifique a internet',
};

export function getAuthErrorMessage(error: unknown): string {
    const code = (error as AuthError)?.code;
    return (code && ERROR_MESSAGES[code]) || 'Não foi possivel entrar. Tente novamente';
}

export async function signIn({ email, password }: SignInInput) {
    const credential = await signInWithEmailAndPassword(auth, email.trim(), password);
    return credential.user;
}

export async function resetPassword(email: string) {
    await sendPasswordResetEmail(auth, email.trim());
}