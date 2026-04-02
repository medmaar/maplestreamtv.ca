import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
      return [
            {
                    source: "/pricing/1-month",
                            destination: "/1-month",
                                    permanent: true,
                                          },
                                                {
                                                        source: "/pricing/6-months",
                                                                destination: "/6-months",
                                                                        permanent: true,
                                                                              },
                                                                                    {
                                                                                            source: "/pricing/12-months",
                                                                                                    destination: "/12-months",
                                                                                                            permanent: true,
                                                                                                                  },
                                                                                                                      ];
                                                                                                                        },
                                                                                                                        };

                                                                                                                        export default nextConfig;