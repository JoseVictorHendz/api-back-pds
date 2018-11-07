exports.test1 = async (request, res) => {
  const testParams = request.params
  const testBody = request.body
  console.log("--------------------", testParams, testBody)
  res.json({value:'working test'});
};

exports.test = async (request, res) => {
  const testParams = request.params
  const testBody = request.body
  console.log("--------------------", testParams, testBody)
  res.json({value:'working test'});
};