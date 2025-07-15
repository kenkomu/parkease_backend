-- CreateTable
CREATE TABLE "VehicleLog" (
    "id" SERIAL NOT NULL,
    "plate" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paid" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "VehicleLog_pkey" PRIMARY KEY ("id")
);
