Meteor.publish('venues', function(userId,category) {
    return Venues.find({
        userId:userId,
        category:category
    });
});
