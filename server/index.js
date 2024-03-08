const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let issues = [
  {
    id: 1,
    title: 'Get Request Created',
    description: 'This will get all the issues',
  },
  {
    id: 2,
    title: 'Update Request Created',
    description: 'This will update the issues',
  },
  {
    id: 3,
    title: 'Delete Request Created',
    description: 'This will delete the issues',
  },
];

app.get('/api/issues', (req, res) => {
  res.json(issues);
});

app.post('/api/issues', (req, res) => {
  const newIssue = req.body;
  issues.push(newIssue);
  console.log('New Issue Created: ', newIssue);
  res.json(newIssue);
});

app.put('/api/issues/:id', (req, res) => {
  const issueId = parseInt(req.params.id);
  const updateIssue = req.body;
  issues = issues.map((issue) => (issue.id === issueId ? updateIssue : issue));
  console.log('Issue updated successfully: ', updateIssue);
  res.json(updateIssue);
});

app.delete('/api/issues/:id', (req, res) => {
  const issueId = parseInt(req.params.id);
  const deletedIssue = issues.find((issue) => issue.id === issueId);
  issues = issues.filter((issue) => issue.id !== issueId);
  console.log('Issue deleted: ', deletedIssue);
  res.json(deletedIssue);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
