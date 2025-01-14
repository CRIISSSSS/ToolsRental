import { Component } from '@angular/core';

type Usuario = {
  id: number;
  nombre: string;
  email: string;
  direccion: string;
  anioNacimiento: number;
};

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.page.html',
  styleUrls: ['./gestion-usuarios.page.scss'],
  standalone: false,
})
export class GestionUsuariosPage {
  usuarios: Usuario[] = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', direccion: 'Calle Falsa 123', anioNacimiento: 1990 },
    { id: 2, nombre: 'María López', email: 'maria@example.com', direccion: 'Avenida Siempre Viva 456', anioNacimiento: 1985 },
  ];

  usuariosFiltrados: Usuario[] = [...this.usuarios];
  formUsuario: Partial<Usuario> = {};
  modoEdicion = false;
  mostrarFormulario = false;

  filtrarUsuarios(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.usuariosFiltrados = this.usuarios.filter((u) =>
      u.nombre.toLowerCase().includes(query) || u.email.toLowerCase().includes(query)
    );
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    this.resetFormulario();
  }

  guardarUsuario() {
    if (this.modoEdicion && this.formUsuario.id) {
      const index = this.usuarios.findIndex((u) => u.id === this.formUsuario.id);
      if (index !== -1) {
        this.usuarios[index] = { ...this.formUsuario } as Usuario;
      }
    } else {
      const nuevoUsuario = { ...this.formUsuario, id: Date.now() } as Usuario;
      this.usuarios.push(nuevoUsuario);
    }
    this.toggleFormulario();
  }

  editarUsuario(usuario: Usuario) {
    this.formUsuario = { ...usuario };
    this.mostrarFormulario = true;
    this.modoEdicion = true;
  }

  eliminarUsuario(id: number) {
    this.usuarios = this.usuarios.filter((u) => u.id !== id);
    this.usuariosFiltrados = [...this.usuarios];
  }

  resetFormulario() {
    this.formUsuario = {};
    this.modoEdicion = false;
  }
}