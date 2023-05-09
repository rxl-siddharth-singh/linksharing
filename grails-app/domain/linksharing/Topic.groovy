package linksharing
import enums.VisibilityEnum


class Topic {

    String name
    VisibilityEnum VISIBILITY
    Date dateCreated= new Date()
    Date lastUpdate = new Date()
    Boolean isDeleted = false

    static hasMany = [subscription: Subscription, resourse: Resource]

    static belongsTo = [createdBy: User]

    static constraints = {
        name blank: false,validator: {val, obj ->
            if(Topic.findByNameAndCreatedBy(val, obj.createdBy)){
                return "linkSharing.duplicateTopic"
            }
        }
    }
}
