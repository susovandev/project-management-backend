const UserRolesEnum = {
    ADMIN: 'admin',
    MEMBER: 'member',
    PROJECT_ADMIN: 'project_admin',
    USER: 'user',
};

const AvailableUsersRole = Object.values(UserRolesEnum);

const TaskStatusEnum = {
    TODO: 'todo',
    PENDING: 'pending',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed',
};

const AvailableTaskStatus = Object.values(TaskStatusEnum);

export {
    UserRolesEnum,
    AvailableUsersRole,
    TaskStatusEnum,
    AvailableTaskStatus,
};
