// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    Links: {
      id: 'kjzl6hvfrbw6c58ss3efy03x8m1ehlz9pn4aqtt6272sl3nflmfkbeicgcru1o0',
      accountRelation: { type: 'single' }
    },
    Skills: {
      id: 'kjzl6hvfrbw6c6nmocpvmcq54s37ik99bldbfz7m2jjxd4fds08xte4czf17u0a',
      accountRelation: { type: 'single' }
    },
    ModeSetting: {
      id: 'kjzl6hvfrbw6c81cws7b26sqgf5vvb3jfxbjc8oboul97r6t8tlqkbzycayjtr4',
      accountRelation: { type: 'single' }
    },
    GeneralProfile: {
      id: 'kjzl6hvfrbw6ca56npdtm1mr9byc7e6vfioo6bhrvc0hkqe2abgyw748rbfnix8',
      accountRelation: { type: 'single' }
    },
    DAOProfile: {
      id: 'kjzl6hvfrbw6c9q4kncx535xovogmvr3gr2rrv9dvnlcf94f85p27jx6s73dpif',
      accountRelation: { type: 'list' }
    },
    Member: {
      id: 'kjzl6hvfrbw6cau1a5y2c8oeu9uel8731nw5ex0kvvkyd0kohovrwbokbbqdpfc',
      accountRelation: { type: 'list' }
    },
    Contributor: {
      id: 'kjzl6hvfrbw6c8z9m2i4b4zo30mzp0ra9n1qokeebpfqglg6ppmy5f71iqdrl9d',
      accountRelation: { type: 'list' }
    },
    DelegateOfProfile: {
      id: 'kjzl6hvfrbw6c9uyszvoukzzzrarfed1f3pq8a4ezbv3s0akcutq55qzesv5oau',
      accountRelation: { type: 'list' }
    },
    DelegateCircleDistribution: {
      id: 'kjzl6hvfrbw6c98lzd304139hndeejvleghpgx5ca1sww60hbu707sucvgo71d9',
      accountRelation: { type: 'list' }
    },
    ContributorProfile: {
      id: 'kjzl6hvfrbw6c6b0k8xa8ixnwfjddad9q7xyxmpyxc4w3sgppzpyvj4q2e1vgxb',
      accountRelation: { type: 'list' }
    },
    MemberProfile: {
      id: 'kjzl6hvfrbw6c8y0ewmyk09dodfjssopwcqipl3wnwubof8pv9txwc9zsrk8fzx',
      accountRelation: { type: 'list' }
    }
  },
  objects: {
    LinksPlatformUser: {
      userName: { type: 'string', required: true },
      platformName: { type: 'string', required: true }
    },
    Links: {
      other: {
        type: 'list',
        required: false,
        item: {
          type: 'reference',
          refType: 'object',
          refName: 'LinksPlatformUser',
          required: false
        }
      },
      github: { type: 'string', required: false },
      medium: { type: 'string', required: false },
      discord: { type: 'string', required: false },
      twitter: { type: 'string', required: false },
      website: { type: 'string', required: false },
      telegram: { type: 'string', required: false },
      author: { type: 'view', viewType: 'documentAccount' }
    },
    Skills: {
      UI: { type: 'boolean', required: false },
      UX: { type: 'boolean', required: false },
      art: { type: 'boolean', required: false },
      NFTs: { type: 'boolean', required: false },
      docs: { type: 'boolean', required: false },
      risk: { type: 'boolean', required: false },
      web3: { type: 'boolean', required: false },
      memes: { type: 'boolean', required: false },
      other: { type: 'string', required: false },
      video: { type: 'boolean', required: false },
      devOps: { type: 'boolean', required: false },
      grants: { type: 'boolean', required: false },
      threeD: { type: 'boolean', required: false },
      backEnd: { type: 'boolean', required: false },
      discord: { type: 'boolean', required: false },
      writing: { type: 'boolean', required: false },
      branding: { type: 'boolean', required: false },
      daoTeams: { type: 'boolean', required: false },
      frontEnd: { type: 'boolean', required: false },
      graphics: { type: 'boolean', required: false },
      security: { type: 'boolean', required: false },
      strategy: { type: 'boolean', required: false },
      fullStack: { type: 'boolean', required: false },
      multisigs: { type: 'boolean', required: false },
      podcasting: { type: 'boolean', required: false },
      tokenomics: { type: 'boolean', required: false },
      socialMedia: { type: 'boolean', required: false },
      translation: { type: 'boolean', required: false },
      compensation: { type: 'boolean', required: false },
      dataAnalysis: { type: 'boolean', required: false },
      productDesign: { type: 'boolean', required: false },
      communications: { type: 'boolean', required: false },
      contractAudits: { type: 'boolean', required: false },
      budgetManagement: { type: 'boolean', required: false },
      projectManagement: { type: 'boolean', required: false },
      growthAndMarketing: { type: 'boolean', required: false },
      treaturyManagement: { type: 'boolean', required: false },
      communityManagement: { type: 'boolean', required: false },
      peopleAndGovernance: { type: 'boolean', required: false },
      contributorExperience: { type: 'boolean', required: false },
      developmentEngineering: { type: 'boolean', required: false },
      author: { type: 'view', viewType: 'documentAccount' }
    },
    ModeSetting: {
      mode: {
        type: 'reference',
        refType: 'enum',
        refName: 'ModeSettingMode',
        required: false
      },
      author: { type: 'view', viewType: 'documentAccount' }
    },
    GeneralProfile: {
      lastName: { type: 'string', required: false },
      firstName: { type: 'string', required: false },
      personalBio: { type: 'string', required: false },
      author: { type: 'view', viewType: 'documentAccount' }
    },
    DAOProfile: {
      name: { type: 'string', required: true },
      description: { type: 'string', required: false },
      daoContractAddress: { type: 'string', required: true },
      author: { type: 'view', viewType: 'documentAccount' },
      version: { type: 'view', viewType: 'documentVersion' },
      members: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'queryConnection',
          model:
            'kjzl6hvfrbw6cau1a5y2c8oeu9uel8731nw5ex0kvvkyd0kohovrwbokbbqdpfc',
          property: 'DaoProfile'
        }
      },
      contributors: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'queryConnection',
          model:
            'kjzl6hvfrbw6c8z9m2i4b4zo30mzp0ra9n1qokeebpfqglg6ppmy5f71iqdrl9d',
          property: 'DaoProfile'
        }
      }
    },
    Member: {
      active: { type: 'boolean', required: true },
      memberID: { type: 'did', required: true },
      DaoProfile: { type: 'streamid', required: true },
      author: { type: 'view', viewType: 'documentAccount' },
      version: { type: 'view', viewType: 'documentVersion' },
      daoProfile: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c9q4kncx535xovogmvr3gr2rrv9dvnlcf94f85p27jx6s73dpif',
          property: 'DaoProfile'
        }
      }
    },
    Contributor: {
      role: { type: 'string', required: false },
      team: { type: 'string', required: false },
      active: { type: 'boolean', required: true },
      memberID: { type: 'did', required: true },
      DaoProfile: { type: 'streamid', required: true },
      author: { type: 'view', viewType: 'documentAccount' },
      version: { type: 'view', viewType: 'documentVersion' },
      daoProfile: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c9q4kncx535xovogmvr3gr2rrv9dvnlcf94f85p27jx6s73dpif',
          property: 'DaoProfile'
        }
      }
    },
    DelegateOfProfile: {
      DaoProfile: { type: 'streamid', required: true },
      intentStatement: { type: 'string', required: true },
      daoRelevantQuals: { type: 'string', required: false },
      author: { type: 'view', viewType: 'documentAccount' },
      version: { type: 'view', viewType: 'documentVersion' },
      daoProfile: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c9q4kncx535xovogmvr3gr2rrv9dvnlcf94f85p27jx6s73dpif',
          property: 'DaoProfile'
        }
      }
    },
    DelegateCircleDistribution: {
      DaoProfile: { type: 'streamid', required: true },
      delegateID: { type: 'did', required: true },
      epochEndDate: { type: 'datetime', required: true },
      circleIdentifier: { type: 'string', required: true },
      getTokensReceived: { type: 'integer', required: true },
      totalTokensAvailable: { type: 'integer', required: true },
      version: { type: 'view', viewType: 'documentVersion' },
      daoProfile: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c9q4kncx535xovogmvr3gr2rrv9dvnlcf94f85p27jx6s73dpif',
          property: 'DaoProfile'
        }
      }
    },
    ContributorProfile: {
      DaoProfile: { type: 'streamid', required: true },
      contributorBio: { type: 'string', required: true },
      optionalAddition: { type: 'string', required: false },
      author: { type: 'view', viewType: 'documentAccount' },
      version: { type: 'view', viewType: 'documentVersion' },
      daoProfile: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c9q4kncx535xovogmvr3gr2rrv9dvnlcf94f85p27jx6s73dpif',
          property: 'DaoProfile'
        }
      }
    },
    MemberProfile: {
      memberBio: { type: 'string', required: true },
      DaoProfile: { type: 'streamid', required: true },
      optionalAddition: { type: 'string', required: false },
      author: { type: 'view', viewType: 'documentAccount' },
      version: { type: 'view', viewType: 'documentVersion' },
      daoProfile: {
        type: 'view',
        viewType: 'relation',
        relation: {
          source: 'document',
          model:
            'kjzl6hvfrbw6c9q4kncx535xovogmvr3gr2rrv9dvnlcf94f85p27jx6s73dpif',
          property: 'DaoProfile'
        }
      }
    }
  },
  enums: { ModeSettingMode: ['LIGHT', 'DARK', 'SYSTEM'] },
  accountData: {
    links: { type: 'node', name: 'Links' },
    skills: { type: 'node', name: 'Skills' },
    modeSetting: { type: 'node', name: 'ModeSetting' },
    generalProfile: { type: 'node', name: 'GeneralProfile' },
    daoProfileList: { type: 'connection', name: 'DAOProfile' },
    memberList: { type: 'connection', name: 'Member' },
    contributorList: { type: 'connection', name: 'Contributor' },
    delegateOfProfileList: { type: 'connection', name: 'DelegateOfProfile' },
    delegateCircleDistributionList: {
      type: 'connection',
      name: 'DelegateCircleDistribution'
    },
    contributorProfileList: { type: 'connection', name: 'ContributorProfile' },
    memberProfileList: { type: 'connection', name: 'MemberProfile' }
  }
};
