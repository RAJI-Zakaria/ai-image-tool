"use client";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { dataUrl, getImageSize } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  image: any;
  publicId: string;
  type: string;
};
const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) => {
  const { toast } = useToast();
  const onSuccessHandler = (result: any) => {
    setImage((prev: any) => ({
      ...prev,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureUrl: result?.info?.secure_url,
    }));
    onValueChange(result?.info?.public_id);
    toast({
      title: "Image Uploaded successfully",
      description: "1 credit deducted from your account",
      className: "success-toast",
      duration: 4000,
    });
  };
  const onErrorHandler = (error: any) => {
    toast({
      title: "Something went wrong",
      description: "Please try again",
      className: "error-toast",
      duration: 4000,
    });
  };
  return (
    <CldUploadWidget
      uploadPreset="jsm_ai_image_tools"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onError={onErrorHandler}
      onSuccess={onSuccessHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text-dark-800">Original</h3>
          {publicId ? (
            <div className="cursor-pointer overflow-hidden rounded-[10px]">
              <CldImage
                className="media-uploader_cldImage"
                width={getImageSize(type, image, "width")}
                height={getImageSize(type, image, "height")}
                src={publicId}
                alt="image"
                sizes={"(max-width: 768px) 100vw, 50vw"}
                placeholder={dataUrl as PlaceholderValue}
              />
            </div>
          ) : (
            <div className="media-uploader_cta" onClick={() => open()}>
              <div className="media-uploader_cta-image">
                <img
                  src="/assets/icons/add.svg"
                  alt="add image"
                  width={24}
                  height={24}
                />
              </div>
              <p className="p-14-medium"> click here to upload image</p>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
