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

function updateSeriousness(topicId, seriousness) {
    $.ajax({
        url: '/subscription/editSeriousness',
        type: 'POST',
        data: {
            topic: topicId,
            seriousnessSelect: seriousness
        },
        success: function (response) {
            document.getElementById(`seriousnessSuccess_${topicId}`).classList.remove('d-none');
            setTimeout(function () {
                document.getElementById(`seriousnessSuccess_${topicId}`).classList.add('d-none');
            }, 3000);
        },
        error: function (xhr, status, error) {
            document.getElementById(`seriousnessError_${topicId}`).classList.remove('d-none');
        }
    });
}
