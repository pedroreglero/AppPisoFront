class Tarea {
    constructor(id, name, created_by, created_on, status, due_to, notify_assignees, assignees) {
        this.id = id;
        this.name = name;
        this.created_by = created_by;
        this.created_on = created_on;
        this.status = status;
        this.due_to = due_to;
        this.notify_assignees = notify_assignees;
        this.assignees = assignees;
    }
}