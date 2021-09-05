import mongoose from "mongoose";

const FruitSearchSchema = mongoose.Schema(
  {
    icon: {
      type: String,
      required: true,
      default: "",
    },
    name: {
      type: String,
      required: true,
      default: "",
    },
    color: {
      type: String,
      required: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const DataDruit = mongoose.model("Data_Fruit", FruitSearchSchema);

export default DataDruit;
