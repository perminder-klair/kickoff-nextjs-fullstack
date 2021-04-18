import micro from 'micro';

export default micro(async (req, res) => {
  console.log('req', req.body);

  try {
    res.status(200).json(req.body);
  } catch (err) {
    console.log('err', err);
    res.status(400).json({ message: err.message });
  }
});
