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
    }
}
