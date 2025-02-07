import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ComponentsCarousel extends Struct.ComponentSchema {
  collectionName: 'components_components_carousels';
  info: {
    description: '';
    displayName: 'Carousel';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsClusterType extends Struct.ComponentSchema {
  collectionName: 'components_components_cluster_types';
  info: {
    description: '';
    displayName: 'Cluster Type';
  };
  attributes: {
    facilities: Schema.Attribute.Component<'components.facility', true>;
    floor_plan: Schema.Attribute.Media<'images' | 'files', true>;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    specification: Schema.Attribute.Component<'components.specification', true>;
    types: Schema.Attribute.Relation<'oneToMany', 'api::type.type'>;
  };
}

export interface ComponentsFacility extends Struct.ComponentSchema {
  collectionName: 'components_components_facilities';
  info: {
    displayName: 'Facility';
  };
  attributes: {
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['CLOCK_ICON', 'CHECK_ICON', 'CLOUD_ICON']
    >;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsSpecification extends Struct.ComponentSchema {
  collectionName: 'components_components_specifications';
  info: {
    description: '';
    displayName: 'Specification';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    text_color: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
  };
  attributes: {
    description: Schema.Attribute.String;
    feature: Schema.Attribute.Component<'components.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logoText: Schema.Attribute.Component<'components.link', false>;
    socialLink: Schema.Attribute.Component<'components.link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'components.link', false>;
    logoText: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'components.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayoutSecond extends Struct.ComponentSchema {
  collectionName: 'components_layout_seconds';
  info: {
    description: '';
    displayName: 'Main Content';
  };
  attributes: {
    banner: Schema.Attribute.Component<'layout.banner', false>;
    carousel: Schema.Attribute.Component<'components.carousel', true>;
    carousel_title: Schema.Attribute.String;
    links: Schema.Attribute.Component<'components.link', true>;
    links_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.carousel': ComponentsCarousel;
      'components.cluster-type': ComponentsClusterType;
      'components.facility': ComponentsFacility;
      'components.feature': ComponentsFeature;
      'components.link': ComponentsLink;
      'components.specification': ComponentsSpecification;
      'layout.banner': LayoutBanner;
      'layout.features-section': LayoutFeaturesSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.second': LayoutSecond;
    }
  }
}
