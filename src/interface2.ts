interface UsuarioBasico {
    nome: string;
    idade: number;
}

interface Administrador extends UsuarioBasico {
    permissaoAdmin: boolean;
}

const admin: Administrador = {
    nome: "Wallace",
    idade: 22,
    permissaoAdmin: true,
};

console.log(admin);
