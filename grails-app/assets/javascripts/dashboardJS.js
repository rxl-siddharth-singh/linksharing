function editTopic(topicId) {
    // Show the edit input field
    document.getElementById(`topicField_${topicId}`).classList.remove('d-none');

    // Hide the display field
    document.getElementById(`topicDisplay_${topicId}`).classList.add('d-none');
}

function cancelEdit(topicId) {
    // Hide the edit field
    document.getElementById(`topicField_${topicId}`).classList.add('d-none');

    // Show the display field
    document.getElementById(`topicDisplay_${topicId}`).classList.remove('d-none');
}

function saveEditTopic(topicId) {
    let newName = document.getElementById(`topicInput_${topicId}`).value;
    $.ajax({
        url: '/topic/editTopicName',
        type: 'POST',
        data: {
            topicId: topicId,
            newTopicName: newName
        },
        success: function (response) {
            // Hide the edit field
            document.getElementById(`topicField_${topicId}`).classList.add('d-none');
            // Show the display field
            document.getElementById(`topicDisplay_${topicId}`).innerText = newName
            document.getElementById(`topicDisplay_${topicId}`).classList.remove('d-none');
            document.getElementById(`success_${topicId}`).classList.remove('d-none')
            setTimeout(function () {
                document.getElementById(`success_${topicId}`).classList.add('d-none');
            }, 3000);
        },
        error: function (xhr, status, error) {
            document.getElementById(`error_${topicId}`).textContent = "You already have a topic with this name";
            document.getElementById(`error_${topicId}`).classList.remove('d-none')
        }
    });
}

function updateVisibility(topicId, visibility) {
    $.ajax({
        url: '/topic/editVisibility',
        type: 'POST',
        data: {
            topic: topicId,
            visibilitySelect: visibility
        },
        success: function (response) {
            document.getElementById(`visibilitySuccess_${topicId}`).classList.remove('d-none')
            setTimeout(function () {
                document.getElementById(`visibilitySuccess_${topicId}`).classList.add('d-none');
            }, 3000);

        },
        error: function (xhr, status, error) {
            document.getElementById(`visibilityError_${topicId}`).classList.remove('d-none')
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
function markRead(readingItemId) {
    $.ajax({
        url: '/resource/markRead',
        type: 'POST',
        data: {
            readingItemId: readingItemId
        },
        success: function (response) {
            let myDiv= document.getElementById(`div_${readingItemId}`)
            myDiv.remove()
            // setTimeout(function () {
            //     document.getElementById(`seriousnessSuccess_${topicId}`).classList.add('d-none');
            // }, 3000);
        },
        error: function (xhr, status, error) {
            document.getElementById(`seriousnessError_${topicId}`).classList.remove('d-none');
        }
    });
}



