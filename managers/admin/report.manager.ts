const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (generator: string) => {
  try {
    const newReport: Report = await prisma.Report.create({
      data: { generator },
    });
    console.log(newReport);
    return newReport;
  } catch (error: any) {
    return error;
  }
};

module.exports = {
  create,
};
