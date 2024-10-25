let teamMembers = [];

document.getElementById('addMember').addEventListener('click', () => {
    const newMember = document.getElementById('newMember').value;
    if (newMember) {
        teamMembers.push(newMember);
        document.getElementById('newMember').value = '';
        updateMemberList();
    }
});

function updateMemberList() {
    const membersList = document.getElementById('members');
    membersList.innerHTML = '';
    teamMembers.forEach(member => {
        const listItem = document.createElement('li');
        listItem.textContent = member;
        membersList.appendChild(listItem);
    });
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function drawPairs() {
    const shuffledMembers = shuffle([...teamMembers]);
    const pairsContainer = document.getElementById('pairs');
    pairsContainer.innerHTML = '';

    for (let i = 0; i < shuffledMembers.length; i += 2) {
        const pair = document.createElement('div');
        pair.className = 'pair';
        pair.textContent = `${shuffledMembers[i]} i ${shuffledMembers[i + 1] || 'Brak pary'}`;
        pairsContainer.appendChild(pair);
    }
}

// Initial update of the member list
updateMemberList();
