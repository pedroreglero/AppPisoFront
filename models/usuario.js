class Usuario {
    constructor(id, username, name, hashedPassword, assignedTasks) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.hashedPassword = hashedPassword;
        this.assignedTasks = assignedTasks;
    }
}