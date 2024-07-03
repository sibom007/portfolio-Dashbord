"use client";
import DForm from "@/shared/DForm/DForm";
import DInput from "@/shared/DInput/DInput";
import { Box, Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { FieldValues } from "react-hook-form";
import { useState } from "react";
import { CreateProjects } from "@/service/action";
import { toast } from "sonner";
import DSelectField from "@/shared/DSelectField/DSelectField";

const ProjectsPage = () => {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState("");
  const [photofile, setPhotofile] = useState<File | null>(null);

  const handleChangePassword = (data: FieldValues) => {
    setLoading(true);
    try {
      const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`;
      const formData = new FormData();
      if (photofile) {
        formData.append("image", photofile);
      }
      const M = fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then(async (res) => {
          return {
            name: data.name,
            driscaption: data.driscaption,
            type: data.type,
            technologies: data.technologies,
            githubClient: data.githubClient,
            githubServer: data.githubServer,

            img: await res?.data?.display_url,
          };
        })
        .catch((err) => {});
      M.then(async (item) => {
        const res = await CreateProjects(item);
        toast.success(res.message);
        setLoading(false);
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setPhotofile(files[0]);
    }
  };

  return (
    <div className="flex w-full  pb-5  items-center justify-center">
      <div className=" w-8/12">
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              color: "gray",
              fontSize: "25px",
              mt: 3,
            }}>
            Projects
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "gray",
              fontSize: "15px",
            }}>
            Hello Welcome Here, You can add Projects
          </Typography>

          <Stack>
            <div
              className="bg-white px-4
              py-6 shadow sm:rounded-lg sm:px-10 w-12/12 mx-auto mt-5">
              <DForm onSubmit={handleChangePassword}>
                <div className="space-y-4">
                  <DInput type="text" name="name" fullWidth label="Name" />
                  <DInput
                    type="text"
                    name="driscaption"
                    fullWidth
                    label="Description"
                  />
                  <DInput
                    type="text"
                    name="technologies"
                    fullWidth
                    label="Technologies"
                  />
                  <DInput type="text" name="Live" fullWidth label="Live link" />
                  <DInput
                    type="text"
                    name="githubClient"
                    fullWidth
                    label="Github Client"
                  />
                  <DInput
                    type="text"
                    name="githubServer"
                    fullWidth
                    label="Github Server"
                  />
                  <DSelectField
                    items={["ALL", "FORENTEND", "BACKEND"]}
                    name="type"
                    fullWidth
                    label="Type"
                  />
                  <input
                    className="border-2 p-2 w-full"
                    type="file"
                    name="photo"
                    onChange={handleFileChange}
                  />
                  <LoadingButton
                    size="small"
                    type="submit"
                    endIcon={<SendIcon />}
                    loadingPosition="end"
                    loading={loading}
                    sx={{
                      backgroundColor: "#A5C9CA",
                      width: "100%",
                      px: 3,
                      py: 1,
                      borderRadius: "6px",
                      color: "white",
                      mt: 2,
                      "&:hover": {
                        backgroundColor: "#A5C9CA",
                      },
                    }}
                    variant="contained">
                    Send
                  </LoadingButton>
                </div>
              </DForm>
            </div>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default ProjectsPage;
