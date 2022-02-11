export {};
declare global {
    const enum ResponseMessage {
        RouteNotFound = "RouteNotFound",
        WelcomeMessage = "WelcomeMessage",
        InvalidSession = "InvalidSession",
        ExpiredSession = "ExpiredSession",
        SessionUserNotFound = "SessionUserNotFound",
        InvalidRequestBody = "InvalidRequestBody",
        MissingRequiredFields = "MissingRequiredFields",
        InvalidCredentials = "InvalidCredentials",
        LoginSuccess = "LoginSuccess",
        LogoutSuccess = "LogoutSuccess",
        SkillNameTooLong = "SkillNameTooLong",
        SkillTypeTooLong = "SkillTypeTooLong",
        SkillLinkTooLong = "SkillLinkTooLong",
        SkillImageUrlTooLong = "SkillImageUrlTooLong",
        SkillBadgeColorTooLong = "SkillBadgeColorTooLong",
        InvalidSkillBadgeColor = "InvalidSkillBadgeColor",
        SkillCreateSuccess = "SkillCreateSuccess",
        SkillRetrieveSuccess = "SkillRetrieveSuccess",
        SkillDeleteSuccess = "SkillDeleteSuccess",
        ContactTitleTooLong = "ContactTitleTooLong",
        ContactTextTooLong = "ContactTextTooLong",
        ContactLinkTooLong = "ContactLinkTooLong",
        ContactIconTooLong = "ContactIconTooLong",
        ContactIconColorInvalid = "ContactIconColorInvalid",
        ContactCreateSuccess = "ContactCreateSuccess",
        ContactRetrieveSuccess = "ContactRetrieveSuccess",
        ContactDeleteSuccess = "ContactDeleteSuccess",
        ContactUpdateSuccess = "ContactUpdateSuccess",
        ContactNotFound = "ContactNotFound",
        NoFieldsToUpdate = "NoFieldsToUpdate",
        ProjectNameTooLong = "ProjectNameTooLong",
        ProjectSummaryTooLong = "ProjectSummaryTooLong",
        ProjectDescriptionTooLong = "ProjectDescriptionTooLong",
        ProjectRepositoryTooLong = "ProjectRepositoryTooLong",
        ProjectCreateSuccess = "ProjectCreateSuccess",
        ProjectRetrieveSuccess = "ProjectRetrieveSuccess",
        ProjectDeleteSuccess = "ProjectDeleteSuccess",
        ProjectUpdateSuccess = "ProjectUpdateSuccess",
        ProjectNotFound = "ProjectNotFound",
        UserRetrieveSuccess = "UserRetrieveSuccess",
    }
}
