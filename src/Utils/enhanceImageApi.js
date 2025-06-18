import axios from "axios";

const API_KEY = "wxudvglilzynw0sqa";
const BASE_URL = "https://techhk.aoscdn.com";

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("image uploaded, Task Id ", taskId);

    const enhancedImageData = await PollForEnhancedImage(taskId);
    console.log("image enhanced ", enhancedImageData);

    console.log(enhancedImageData);

    return enhancedImageData;
  } catch (error) {
    console.log("Error while enhancing", error.message);
  }


};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "content-type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image");
  }
  console.log(data);

  // Code to Upload Image
  // /api/tasks/visual/scale
  return data.data.task_id;
};
const PollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);
  
    if (result.state === 4) {
      console.log("Processing");
  
      if (retries >= 20) {
        throw new Error("Max tries Reached");
      }
      // wait for 2 sec
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      return PollForEnhancedImage(taskId, retries + 1);
    }
    console.log("enhanced image",result);
  
    return result;
  };
const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,

    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image");
  }

  return data.data;
  // /api/tasks/visual/scale/{task_id}
};


