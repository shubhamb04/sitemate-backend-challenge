const fetch = require('node-fetch');

const apiUrl = 'http://localhost:3000/api/issues';

const createNewIssue = async (issue) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(issue),
  });

  const data = await response.json();
  console.log('New issue created', data);
};

const getIssues = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log('Issues retrieved: ', data);
};

const updateIssue = async (id, updatedIssueData) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedIssueData),
  });

  const data = await response.json();
  console.log('Issue updated: ', data);
};

const deletingIssue = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  console.log('Issue deleted: ', data);
};

const main = async () => {
  await getIssues();
  await createNewIssue({
    id: 4,
    title: 'New Issue',
    description: 'Description for New Issue',
  });
  await updateIssue(4, {
    id: 4,
    title: 'Updated Issue',
    description: 'Updated Description',
  });
  await deletingIssue(4);
};

main();
