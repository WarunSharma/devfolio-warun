'use client';

import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      info: 'warunsharma.95@gmail.com',
      link: 'mailto:warunsharma.95@gmail.com',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/50'
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Phone',
      info: '+91 8708087834',
      link: 'tel:+918708087834',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/50'
    },
    {
      icon: <FaWhatsapp className="text-3xl" />,
      title: 'WhatsApp',
      info: '+91 8708087834',
      link: 'https://wa.me/918708087834',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/50'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      link: 'https://github.com/WarunSharma/',
      color: 'hover:text-gray-300'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/warun-sharma/',
      color: 'hover:text-blue-400'
    },
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      link: 'https://www.facebook.com/sharma.warun',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28 text-white bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
      {/* Container with same max-width as Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s collaborate and bring your ideas to life
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className={`bg-slate-800/50 border ${method.borderColor} rounded-lg p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300 ${method.bgColor} group`}
            >
              <div className={`${method.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-gray-400 text-sm">{method.info}</p>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/50 rounded-lg p-8 text-center backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Drop me an email and I&apos;ll get back to you as soon as possible.
            </p>
            <a
              href="mailto:warunsharma.95@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 rounded-lg font-semibold uppercase tracking-wider hover:from-indigo-600 hover:to-blue-600 transition-all duration-300"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Connect with me on</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-4xl text-blue-500 ${social.color} hover:scale-125 transition-all duration-300 flex flex-col items-center gap-2`}
                title={social.name}
              >
                {social.icon}
                <span className="text-xs text-gray-400">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

