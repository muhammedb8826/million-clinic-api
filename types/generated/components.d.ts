import type { Schema, Struct } from '@strapi/strapi';

export interface CommonCard extends Struct.ComponentSchema {
  collectionName: 'components_common_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'components.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface CommonLinkWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_common_link_with_icons';
  info: {
    displayName: 'Link with Icon';
  };
  attributes: {
    icon: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::strapi-plugin-iconhub.iconhub',
        {
          storeIconData: true;
          storeIconName: true;
        }
      >;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CommonSocialIcon extends Struct.ComponentSchema {
  collectionName: 'components_common_social_icons';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    icon: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::strapi-plugin-iconhub.iconhub',
        {
          storeIconData: true;
          storeIconName: true;
        }
      >;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_components_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.String;
  };
}

export interface ComponentsAddress extends Struct.ComponentSchema {
  collectionName: 'components_components_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    city: Schema.Attribute.String;
    country: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    street: Schema.Attribute.String;
  };
}

export interface ComponentsDropdown extends Struct.ComponentSchema {
  collectionName: 'components_components_dropdowns';
  info: {
    displayName: 'Dropdown';
  };
  attributes: {
    dropDown: Schema.Attribute.Component<'components.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_cards';
  info: {
    displayName: 'Feature card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::strapi-plugin-iconhub.iconhub',
        {
          storeIconData: true;
          storeIconName: true;
        }
      >;
    link: Schema.Attribute.Component<'components.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_components_footer_columns';
  info: {
    displayName: 'Footer Column';
  };
  attributes: {
    links: Schema.Attribute.Component<'components.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsSlides extends Struct.ComponentSchema {
  collectionName: 'components_components_slides';
  info: {
    displayName: 'Slides';
  };
  attributes: {
    slides: Schema.Attribute.Component<'shared.slider', true>;
  };
}

export interface ComponentsSpeaker extends Struct.ComponentSchema {
  collectionName: 'components_components_speakers';
  info: {
    displayName: 'Speaker';
  };
  attributes: {
    bio: Schema.Attribute.String;
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
    role: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'common.social-icon', true>;
  };
}

export interface ComponentsStat extends Struct.ComponentSchema {
  collectionName: 'components_components_stats';
  info: {
    displayName: 'Stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.Integer;
    suffix: Schema.Attribute.String;
  };
}

export interface ComponentsTestimnonial extends Struct.ComponentSchema {
  collectionName: 'components_components_testimnonials';
  info: {
    displayName: 'Testimnonial';
  };
  attributes: {
    author: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images'>;
    quote: Schema.Attribute.String;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    role: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    bottomLinks: Schema.Attribute.Component<'components.link', true>;
    columns: Schema.Attribute.Component<'components.footer-column', true>;
    copyRight: Schema.Attribute.String;
    darkLogo: Schema.Attribute.Media<'images'>;
    intro: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images'>;
    socialLinks: Schema.Attribute.Component<'common.social-icon', true>;
  };
}

export interface LayoutMainMenu extends Struct.ComponentSchema {
  collectionName: 'components_layout_main_menus';
  info: {
    displayName: 'Main Menu';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.link', true>;
    darkLogo: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Media<'images'>;
    menu: Schema.Attribute.Component<'components.link', true>;
    subMenu: Schema.Attribute.Component<'components.dropdown', true>;
  };
}

export interface LayoutTopHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_headers';
  info: {
    displayName: 'Top Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.link-with-icon', true>;
    socialIcon: Schema.Attribute.Component<'common.social-icon', true>;
  };
}

export interface SectionAccordions extends Struct.ComponentSchema {
  collectionName: 'components_section_accordions';
  info: {
    displayName: 'Accordions';
  };
  attributes: {
    items: Schema.Attribute.Component<'components.accordion', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionCards extends Struct.ComponentSchema {
  collectionName: 'components_section_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    cards: Schema.Attribute.Component<'common.card', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionContent extends Struct.ComponentSchema {
  collectionName: 'components_section_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    link: Schema.Attribute.Component<'components.link', false>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionCta extends Struct.ComponentSchema {
  collectionName: 'components_section_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.String;
    link: Schema.Attribute.Component<'components.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionFeatures extends Struct.ComponentSchema {
  collectionName: 'components_section_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    features: Schema.Attribute.Component<'components.feature-card', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionGallery extends Struct.ComponentSchema {
  collectionName: 'components_section_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    items: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionStats extends Struct.ComponentSchema {
  collectionName: 'components_section_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    stats: Schema.Attribute.Component<'components.stat', true>;
  };
}

export interface SectionTabSection extends Struct.ComponentSchema {
  collectionName: 'components_section_tab_sections';
  info: {
    displayName: 'Tab Section';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'full-width']>;
    defaultActiveTab: Schema.Attribute.Integer;
    subTitle: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'shared.tab-item', true>;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['underline', 'pills', 'boxed', 'vertical']
    >;
  };
}

export interface SectionTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_section_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<'components.testimnonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_section_video_sections';
  info: {
    displayName: 'Video section';
  };
  attributes: {
    layout: Schema.Attribute.Enumeration<
      ['full-width', 'contained', 'background']
    >;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Component<'shared.video', false>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    type: Schema.Attribute.Enumeration<['image', 'video', 'audio']>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'components.link', false>;
    media: Schema.Attribute.Media<'images' | 'videos'>;
    subHeading: Schema.Attribute.String;
  };
}

export interface SharedTabItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_tab_items';
  info: {
    displayName: 'Tab Item';
  };
  attributes: {
    featuredCard: Schema.Attribute.Component<'components.feature-card', true>;
    icon: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::strapi-plugin-iconhub.iconhub',
        {
          storeIconData: true;
          storeIconName: true;
        }
      >;
    label: Schema.Attribute.String;
    link: Schema.Attribute.Component<'components.link', true>;
    textContent: Schema.Attribute.Component<'shared.rich-text', true>;
  };
}

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    provider: Schema.Attribute.Enumeration<
      ['youtube', 'vimeo', 'direct', 'other']
    >;
    thumbnail: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.card': CommonCard;
      'common.link-with-icon': CommonLinkWithIcon;
      'common.social-icon': CommonSocialIcon;
      'components.accordion': ComponentsAccordion;
      'components.address': ComponentsAddress;
      'components.dropdown': ComponentsDropdown;
      'components.feature-card': ComponentsFeatureCard;
      'components.footer-column': ComponentsFooterColumn;
      'components.link': ComponentsLink;
      'components.slides': ComponentsSlides;
      'components.speaker': ComponentsSpeaker;
      'components.stat': ComponentsStat;
      'components.testimnonial': ComponentsTestimnonial;
      'layout.footer': LayoutFooter;
      'layout.main-menu': LayoutMainMenu;
      'layout.top-header': LayoutTopHeader;
      'section.accordions': SectionAccordions;
      'section.cards': SectionCards;
      'section.content': SectionContent;
      'section.cta': SectionCta;
      'section.features': SectionFeatures;
      'section.gallery': SectionGallery;
      'section.stats': SectionStats;
      'section.tab-section': SectionTabSection;
      'section.testimonials': SectionTestimonials;
      'section.video-section': SectionVideoSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tab-item': SharedTabItem;
      'shared.video': SharedVideo;
    }
  }
}
