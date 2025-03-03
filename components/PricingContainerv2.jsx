"use client";
import { Box, Divider, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import Switch from "react-switch";
import { PricingUnit } from "./ui/PricingUnit";
import Image from "next/image";
import { useTheme } from "next-themes";

const PricingContainer = () => {
  const { theme } = useTheme();
  const [monthly, setMonthly] = useState(false);

  const handleChange = () => {
    setMonthly(!monthly);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Group sx={{ zIndex: 50 }}>
        <Stack spacing={20}>
          {/** header section */}

          {/* Month switch button */}
          {/* <Flex direction="column" gap={10} align="center" justify="start">
            <Box
              sx={{
                fontWeight: 400,
                color: "hsl(234, 14%, 74%)",
                display: "flex",
                alignItems: "center",
                gap: 15,
              }}
            >
              <Text
                // fz={"sm"}
                className={`font-lexendDeca text-xs md:text-sm uppercase tracking-wide ${monthly ? "dark:text-gray-600" : "text-black-100 dark:text-white"}`}
              >
                monthly
              </Text>
              <Switch
                checked={monthly}
                onChange={handleChange}
                checkedIcon={null}
                uncheckedIcon={null}
                boxShadow=""
                activeBoxShadow=""
                width={45}
                height={25}
                onColor={"#7F85E4"}
                offColor={"#7F85E4"}
                handleDiameter={18}
              />
              <Text
                // fz={"sm"}
                className={`font-lexendDeca text-xs md:text-sm uppercase tracking-wide ${monthly ? "dark:text-white text-black-100" : "dark:text-gray-600"}`}
              >
                semi-annually (save 10%)
              </Text>
            </Box>
          </Flex> */}
          {/** cards section */}
          <Group>
            <Flex
              align={"center"}
              direction={{ base: "column", sm: "row" }}
              color={"white"}
              gap={{ base: "2.5rem", sm: 50 }}
            >
              {/* ESSENTIALS SUITE */}
              <Box
                className="mt-12 dark:border dark:border-white/[0.2]"
                sx={{
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0)",
                  height: "42rem",
                  width: "21rem",
                  paddingInline: "1.5rem",
                  paddingTop: "2.5rem",
                  borderRadius: "1.4rem",
                  backgroundColor: theme === "dark" ? "" : "#f6f5f4",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",
                  "@media (max-width: 755px)": {
                    width: "19rem",
                    borderRadius: "1.4rem",
                    height: "32rem",
                    paddingTop: "2rem",
                  },
                  "@media (min-width: 756px) and (max-width: 820px)": {
                    width: "15rem",
                    borderRadius: "0 0 0 0",
                  },
                }}
              >
                <Stack w={"100%"} align={"center"} spacing={10}>
                  <div className="flex flex-1 gap-2">
                    <Image
                      src="/images/plant-black.svg"
                      alt=""
                      height={20}
                      width={20}
                      className="dark:hidden"
                    />
                    <Image
                      src="/images/plant.svg"
                      alt=""
                      height={20}
                      width={20}
                      className="hidden dark:block"
                    />
                    <Text
                      sx={{
                        fontWeight: 700,
                      }}
                      fz={"md"}
                      className="font-lexendDeca"
                    >
                      ESSENTIALS SUITE
                    </Text>
                  </div>
                  {monthly ? (
                    ""
                  ) : (
                    <Title
                      order={2}
                      sx={{
                        fontSize: 20,
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "-0.5rem",
                        gap: 2,
                        color: "#7F85E4",
                      }}
                      className="font-lexendDeca"
                    >
                      <s>
                        <Text fz={"1.3rem"}>₹</Text>
                      </s>
                      <s>{monthly ? "16,320" : "19,990"}</s>
                      <s>
                        <Text fz={"1.3rem"}>/mo</Text>
                      </s>
                    </Title>
                  )}

                  <Title
                    order={2}
                    sx={{
                      fontSize: 45,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                    className="font-lexendDeca font-bold"
                  >
                    <Text fz={"2rem"}>₹</Text>
                    {monthly ? "17,990" : "15,997"}
                    <Text fz={"2rem"}>/mo</Text>
                  </Title>
                  <Stack className="pt-5" w={"100%"} align="start" spacing={10}>
                    <PricingUnit name="Patient-Oriented Medical Website" />
                    <PricingUnit name="Impressive Google Maps Listing" />
                    <PricingUnit name="Organic Google Reviews" />
                    {/* <PricingUnit name="Online Reputation Management" /> */}
                    <PricingUnit name="Patient Relations Management" />
                    {/* <PricingUnit name="Social Media Posts" /> */}
                    {/* <PricingUnit name="Facebook + Instagram Ads" /> */}
                    {/* <PricingUnit name="3 Business Emails" /> */}
                    <PricingUnit name="Access To Our Community" />
                    {/* <PricingUnit name="7 Guaranteed Appts/mo" /> */}
                    <PricingUnit name="Basic Support" />
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: "dimgray",
                        opacity: 1,
                      }}
                    />
                  </Stack>
                </Stack>
              </Box>
              {/* PROFESSIONAL SUITE */}
              <Box
                sx={{
                  position: "relative",
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0)",
                  height: "42rem",
                  width: "22rem",
                  paddingInline: "1.5rem",
                  paddingTop: "2.5rem",
                  background: "transparent",
                  backgroundSize: theme === "dark" ? "500% 500%" : "",
                  background:
                    theme === "dark"
                      ? "linear-gradient(to right, #4338ca, #6366f1,#8b5cf6, #6366f1, #4338ca, #6366f1)"
                      : "#f6f5f4",
                  border: theme === "dark" ? "" : "4px solid black",
                  color: theme === "dark" ? "white" : "",
                  borderRadius: "1.4rem",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",
                  "@media (max-width: 755px)": {
                    width: "19rem",
                    borderRadius: "1.4rem",
                    height: "42rem",
                    // paddingTop: "1rem",
                  },

                  "@media (min-width: 756px) and (max-width: 820px)": {
                    width: "15rem",
                    borderRadius: "0.7rem",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                    padding: "0.4rem",
                    borderRadius: "1.1rem 1.1rem 0 0",
                    zIndex: 10,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    visibility: theme === "dark" ? "hidden" : "visible",
                  }}
                >
                  Most Popular
                </Box>
                <Stack
                  w={"100%"}
                  align={"center"}
                  spacing={10}
                  className="pt-4"
                >
                  <div className="flex flex-1 gap-1">
                    <Image
                      src="/images/star-black.svg"
                      alt=""
                      height={20}
                      width={20}
                      className="dark:hidden"
                    />
                    <Image
                      src="/images/star.svg"
                      alt=""
                      height={20}
                      width={20}
                      className="hidden dark:block"
                    />
                    <Text
                      sx={{
                        fontWeight: 700,
                      }}
                      fz={"md"}
                      className="font-lexendDeca"
                    >
                      PROFESSIONAL SUITE
                    </Text>
                  </div>
                  {monthly ? (
                    ""
                  ) : (
                    <Title
                      order={2}
                      sx={{
                        fontSize: 20,
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "-0.5rem",
                        gap: 2,
                        color: "#7F85E4",
                      }}
                      className="font-lexendDeca"
                    >
                      <s>
                        <Text fz={"1.3rem"}>₹</Text>
                      </s>
                      <s>{monthly ? "31,620" : "35,000"}</s>
                      <s>
                        <Text fz={"1.3rem"}>/mo</Text>
                      </s>
                    </Title>
                  )}

                  <Title
                    order={2}
                    sx={{
                      fontSize: 45,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                    className="font-lexendDeca font-bold"
                  >
                    <Text fz={"2rem"}>₹</Text>
                    {monthly ? "31,500" : "24,997"}
                    <Text fz={"2rem"}>/mo</Text>
                  </Title>
                  <Stack className="pt-5" w={"100%"} align="start" spacing={10}>
                    <p className="font-lexendDeca">Everything before +</p>
                    <PricingUnit name="Active Outreach to Attract New Patients" />
                    <PricingUnit name="Facebook + Instagram + Google Ads" />
                    {/* <PricingUnit name="Complete Photography & Videography of your Practice" /> */}
                    <PricingUnit name="Lead Nurturing" />
                    <PricingUnit name="Custom Digital Business Card" />
                    <PricingUnit name="7 Business Emails" />
                    <PricingUnit name="Monthly Strategy Meetings" />
                    <PricingUnit name="Priority Support" />
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: "dimgray",
                        opacity: 1,
                      }}
                    />
                  </Stack>
                </Stack>
              </Box>

              {/* MASTER SUITE */}
              <Box
                className="dark:border dark:border-white/[0.2] md:mt-12"
                sx={{
                  boxShadow: "0px 30px 50px -7px rgba(0,0,0,0)",
                  height: "42rem",
                  width: "21rem",
                  paddingInline: "1.5rem",
                  paddingTop: "2.5rem",
                  borderRadius: "1.4rem",
                  backgroundColor: theme === "dark" ? "" : "#f6f5f4",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",
                  "@media (max-width: 755px)": {
                    width: "19rem",
                    borderRadius: "1.4rem",
                    height: "40rem",
                    paddingTop: "2rem",
                  },
                  "@media (min-width: 756px) and (max-width: 820px)": {
                    width: "15rem",
                    borderRadius: "0 0.7rem 0.7rem 0",
                  },
                }}
              >
                <Stack w={"100%"} align={"center"} spacing={10}>
                  <div className="flex flex-1 gap-2">
                    <Image
                      src="/images/crown-black.svg"
                      alt=""
                      height={20}
                      width={20}
                      className="dark:hidden"
                    />
                    <Image
                      src="/images/crown.svg"
                      alt=""
                      height={20}
                      width={20}
                      className="hidden dark:block"
                    />
                    <Text
                      sx={{
                        fontWeight: 700,
                      }}
                      fz={"md"}
                      className="font-lexendDeca"
                    >
                      MASTER SUITE
                    </Text>
                  </div>
                  {monthly ? (
                    ""
                  ) : (
                    <Title
                      order={2}
                      sx={{
                        fontSize: 20,
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "-0.5rem",
                        gap: 2,
                        color: "#7F85E4",
                      }}
                      className="font-lexendDeca"
                    >
                      <s>
                        <Text fz={"1.3rem"}>₹</Text>
                      </s>
                      <s>{monthly ? "73,610" : "1,40,000"}</s>
                      <s>
                        <Text fz={"1.3rem"}>/mo</Text>
                      </s>
                    </Title>
                  )}
                  <Title
                    order={2}
                    sx={{
                      fontSize: 45,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                    className="font-lexendDeca font-bold"
                  >
                    <Text fz={"2rem"}>₹</Text>
                    {monthly ? "1,26,000" : "72,997"}
                    <Text fz={"2rem"}>/mo</Text>
                  </Title>
                  <Stack className="pt-5" w={"100%"} align="start" spacing={10}>
                    <p className="font-lexendDeca">Everything before +</p>
                    <PricingUnit name="Brand Identity & Logo Design" />
                    <PricingUnit name="Metallic Digital Business Card" />
                    <PricingUnit name="Email Marketing" />
                    <PricingUnit name="Orion CRM with AI Automation" />
                    <PricingUnit name="Receptionist & Staff Training" />
                    <PricingUnit name="12 Business Emails" />
                    <PricingUnit name="Weekly Strategy Meetings" />
                    <Divider
                      sx={{
                        width: "100%",
                        borderColor: "dimgray",
                        opacity: 1,
                      }}
                    />
                  </Stack>
                </Stack>
              </Box>
            </Flex>
          </Group>
        </Stack>
      </Group>
    </div>
  );
};

export default PricingContainer;
