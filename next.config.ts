import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/legal-services-conveyancing-wills-probate-mortgages-leases-contracts',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/legal-services-conveyancing-wills-probate-mortgages-leases-contracts/',
        destination: '/services/mortgages-and-leases',
        permanent: true,
      },
      {
        source: '/conveyancing-sales-and-purchases-property',
        destination: '/services/conveyancing',
        permanent: true,
      },
      {
        source: '/wills-probate-lisa-tonge-solicitor-legal-services-worsley-manchester',
        destination: '/services/wills-and-probate',
        permanent: true,
      },
      {
        source: '/mortgages-leases-lisa-tonge-solicitor-worsley-salford-manchester',
        destination: '/services/mortgages-and-leases',
        permanent: true,
      },
      {
        source: '/mortgages',
        destination: '/services/mortgages-and-leases',
        permanent: true,
      },
      {
        source: '/business-documents',
        destination: '/services/business-documents',
        permanent: true,
      },
      {
        source: '/contact-solicitor-conveyancing-wills-probate-mortgages-contracts',
        destination: '/contacts',
        permanent: true,
      },
      {
        source: '/privacy-data-protection-lisa-tonge-solicitor-worsley-salford-manchester',
        destination: '/privacy-and-data-protection',
        permanent: true,
      },
      {
        source: '/regulatory-lisa-tonge-solicitor-worsley-salford-manchester',
        destination: '/regulatory',
        permanent: true,
      },
      {
        source: '/legal-services-solicitor-lisa-tonge-worsley-salford-manchester',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/news-legal-services-lisa-tonge-solicitor',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
