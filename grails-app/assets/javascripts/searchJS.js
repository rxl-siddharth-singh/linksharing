function trendingEditTopic(topicId) {
    // Show the edit input field
    document.getElementById(`trendingTopicField_${topicId}`).classList.remove('d-none');

    // Hide the display field
    document.getElementById(`trendingTopicDisplay_${topicId}`).classList.add('d-none');
}

function trendingCancelEdit(topicId) {
    // Hide the edit field
    document.getElementById(`trendingTopicField_${topicId}`).classList.add('d-none');

    // Show the display field
    document.getElementById(`trendingTopicDisplay_${topicId}`).classList.remove('d-none');
}

function trendingSaveEditTopic(topicId) {
    let newName = document.getElementById(`trendingTopicInput_${topicId}`).value;
    $.ajax({
        url: '/topic/editTopicName',
        type: 'POST',
        data: {
            topicId: topicId,
            newTopicName: newName
        },
        success: function (response) {
            // Hide the edit field
            document.getElementById(`trendingTopicField_${topicId}`).classList.add('d-none');
            // Show the display field
            document.getElementById(`trendingTopicDisplay_${topicId}`).innerText = newName
            document.getElementById(`trendingTopicDisplay_${topicId}`).classList.remove('d-none');
            document.getElementById(`trendingSuccess_${topicId}`).classList.remove('d-none')
            setTimeout(function () {
                document.getElementById(`trendingSuccess_${topicId}`).classList.add('d-none');
            }, 3000);
        },
        error: function (xhr, status, error) {
            document.getElementById(`trendingError_${topicId}`).textContent = "You already have a topic with this name";
            document.getElementById(`trendingError_${topicId}`).classList.remove('d-none')
        }
    });
}

function trendingUpdateSeriousness(topicId, seriousness) {
    $.ajax({
        url: '/subscription/editSeriousness',
        type: 'POST',
        data: {
            topic: topicId,
            seriousnessSelect: seriousness
        },
        success: function (response) {
            document.getElementById(`trendingSeriousnessSuccess_${topicId}`).classList.remove('d-none');
            setTimeout(function () {
                document.getElementById(`trendingSeriousnessSuccess_${topicId}`).classList.add('d-none');
            }, 3000);
        },
        error: function (xhr, status, error) {
            document.getElementById(`trendingSeriousnessError_${topicId}`).classList.remove('d-none');
        }
    });
}

function trendingUpdateVisibility(topicId, visibility) {
    $.ajax({
        url: '/topic/editVisibility',
        type: 'POST',
        data: {
            topic: topicId,
            visibilitySelect: visibility
        },
        success: function (response) {
            document.getElementById(`trendingVisibilitySuccess_${topicId}`).classList.remove('d-none')
            setTimeout(function () {
                document.getElementById(`trendingVisibilitySuccess_${topicId}`).classList.add('d-none');
            }, 3000);

        },
        error: function (xhr, status, error) {
            document.getElementById(`trendingVisibilityError_${topicId}`).classList.remove('d-none')
        }
    });
}

function subscribe(topicId, username) {
    $.ajax({
        url: '/subscription/createSubscription',
        type: 'POST',
        data: {
            topicId: topicId,
            username: username,
            seriousness: "VERY_SERIOUS"
        },
        success: function (response) {
            let messageElement = document.getElementById(`message_${topicId}`);
            messageElement.textContent = "Subscribed";
            messageElement.classList.remove('d-none');
            messageElement.classList.add('text-success');

            let subscriptionCountElement = document.getElementById(`subscriptionCount_${topicId}`);
            subscriptionCountElement.textContent = parseInt(subscriptionCountElement.textContent) + 1;

            document.getElementById(`subscribeBtn_${topicId}`).classList.add('d-none');
            setTimeout(function () {
                messageElement.classList.add('d-none');
            }, 3000);
        },
        error: function (xhr, status, error) {
            let messageElement = document.getElementById(`message_${topicId}`);
            messageElement.textContent = "Failed";
            messageElement.classList.remove('d-none');
            messageElement.classList.add('text-danger');

            document.getElementById(`subscribeBtn_${topicId}`).classList.add('d-none');
            setTimeout(function () {
                messageElement.classList.add('d-none');
            }, 3000);
        }
    });
}
function deleteTopic(topicId) {
    $.ajax({
        url: '/topic/deleteTopic',
        type: 'POST',
        data: {
            topicId: topicId,
        },
        success: function (response) {
            window.location.reload()
        },
        error: function (xhr, status, error) {
            window.location.reload()
        }
    });
}
function markRead(readingItemId) {
    $.ajax({
        url: '/resource/markRead',
        type: 'POST',
        data: {
            readingItemId: readingItemId
        },
        success: function (response) {
            let readBtn = document.getElementById('markReadBtn')
            readBtn.remove()
        },
        error: function (xhr, status, error) {
            console.log(error)
        }
    });
}
function unsubscribe(topicId, username) {
    $.ajax({
        url: '/subscription/deleteSubscription',
        type: 'POST',
        data: {
            topicId: topicId,
            username: username
        },
        success: function (response) {
            window.scrollTo({top: 0, behavior: 'smooth'});

            setTimeout(function () {
                window.location.reload()
            }, 500);
        },
        error: function (xhr, status, error) {
            window.scrollTo({top: 0, behavior: 'smooth'});

            setTimeout(function () {
                window.location.reload()
            }, 500);
        }
    });
}