class Asignados_Tareas {
    id: number;
    task_id: number;
    user_id: number;
    assigned_on: Date;
    assigned_by: number;
}

class Integrantes_Pisos {
    id: number;
    piso_id: number;
    user_id: number;
    join_date: Date;
    assigner_id: number;
}

class Piso {
    id: number;
    name: string;
}

class Tarea {
    id: number;
    name: string;
    created_by: number;
    created_on: Date;
    status: string;
    due_to: Date;
    notify_assignees: boolean;
    assignees: Usuario[];
    finished_on: Date;
    finished_by: number;
    cancelled_on: Date;
    cancelled_by: number;
    piso_id: number;
}

class Usuario {
    id: number;
    username: string;
    name: string;
    hashedPassword: string;
    assigned_Tasks: Tarea[];
    assigned_Piso: Piso;
}

export { Asignados_Tareas, Integrantes_Pisos, Piso, Tarea, Usuario };