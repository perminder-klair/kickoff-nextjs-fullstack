import micro from 'micro';
import sanity from '../../utils/sanity';

export default micro(async (req, res) => {
  // console.log('req', req.body);
  const doc = {
    _type: 'order',
    ...req.body,
  };

  try {
    const result = await sanity.create(doc);
    console.log(`Order was created, document ID is ${result._id}`);

    res.status(200).json(result);
  } catch (err) {
    console.log('err', err);
    res.status(400).json({ message: err.message });
  }
});
