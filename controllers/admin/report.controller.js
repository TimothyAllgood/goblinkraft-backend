const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getReports = async (req, res) => {
  try {
    const reportType = req.query.type;
    if (reportType) {
      const reports = await prisma.report.findMany({
        where: {
          generator: reportType,
        },
      });
      res.json(reports);
    } else {
      const reports = await prisma.report.findMany({});
      res.json(reports);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getReports,
};
