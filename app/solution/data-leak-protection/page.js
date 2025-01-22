import React from "react";
export const metadata = {
  title: "DeviceLock® Endpoint Data Leak Prevention | Smartest Developers",
  description:
      "DeviceLock® is an endpoint data leak prevention solution, offering network administrators control over USB, FireWire, WiFi, Bluetooth, and other plug-and-play devices. Secure data transfers, define encryption policies, and monitor device activity to protect corporate data from unauthorized access and leaks.",
  keywords:
      "DeviceLock®, endpoint data leak prevention, USB access control, WiFi security, Bluetooth security, data encryption policies, corporate data protection, shadowing, removable devices, data theft prevention, IT security, device management"
};

const DataLeakProtection = () => {
  return (
    <div>
      <div>
        <section className="banner-img">
          <img
            src="/template/WebAssets/img/common/headers/solutions.jpg"
            alt="data leak solutions "
            className="img__header"
          />
        </section>
        {/* Content
      ============================================= */}
        <section id="content" style={{ marginBottom: 0 }}>
          <div className="content-wrap py-0">
            <div className="section client-slide">
              <div className="container clearfix">
                <div className="row justify-content-between align-items-top">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="heading-block bottommargin-sm">
                      <h3 data-animate="fadeInUp" className="fadeInUp animated">
                        About DeviceLock®
                      </h3>
                    </div>
                    <p
                      className="mb-3 text-justify fadeInUp animated"
                      data-animate="fadeInUp"
                    >
                      Firewalls and antivirus software are no defense against
                      acts of data theft and corruption from within your
                      organization at local endpoints. You don't have to be an
                      administrator to connect a small digital camera, MP3
                      player, or flash memory stick to the USB and begin
                      uploading or downloading whatever you want. If you are a
                      system administrator, you know you can't manage such
                      device-level activity via Group Policy.
                    </p>
                    <p
                      className="mb-3 text-justify not-animated"
                      data-animate="fadeInUp"
                    >
                      Using endpoint data leak prevention (DLP) solution called
                      DeviceLock®, network administrators can lock out
                      unauthorized users from USB and FireWire devices, WiFi and
                      Bluetooth adapters, CD-Rom and floppy drives, serial and
                      parallel ports, PDAs and smartphones, local and network
                      printers and many other plug-and-play devices. Once
                      DeviceLock® is installed, administrators can control
                      access to any device, depending on the time of day and day
                      of the week.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div
                      className="border-light fadeInUp animated"
                      data-animate="fadeInUp"
                      data-delay={200}
                    >
                      <img
                        src="/template/WebAssets/img/Solutions/Device%20Lock.png"
                        alt="Featured image 3"
                        className="card-img-top"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <p className="mb-3 not-animated" data-animate="fadeInUp">
                      For enterprises standardized on software and
                      hardware-based encryption solutions like PGP® Whole Disk
                      Encryption, TrueCrypt, DriveCrypt, Lexar® SAFE PSD S1100
                      and Lexar® JumpDrive SAFE S3000 USB drives, DeviceLock®
                      allows administrators to centrally define and remotely
                      control the encryption policies their employees must
                      follow when using removable devices for storing and
                      retrieving corporate data. For example, certain employees
                      or their groups can be allowed to write to and read from
                      only specifically encrypted USB flash drives, while other
                      users of the corporate network can be permitted to "read
                      only" from non-encrypted removable storage devices but not
                      write to them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="container clearfix">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 data-animate="fadeInUp" className="not-animated">
                      DeviceLock®
                    </h4>
                    <p className="mb-3 not-animated" data-animate="fadeInUp">
                      The USB white list allows you to authorize only specific
                      devices that will not be locked regardless of any other
                      settings. The intention is to allow special devices (e.g.
                      smart card readers) but lock all other devices. Media
                      White List feature allows you to authorize access to
                      specific DVD/CD-ROM disks, uniquely identified by data
                      signature, even when DeviceLock® has otherwise blocked the
                      DVD/CD-ROM drive. A convenience when DVD/CD-ROM disks are
                      routinely used for the distribution of new software or
                      instruction manuals, Media White Listing can also specify
                      allowed users and groups, so that only authorized users
                      are able to access the contents of the DVD or CD-ROM.
                    </p>
                    <p className="mb-3 not-animated" data-animate="fadeInUp">
                      The DeviceLock®'s optional data shadowing capability
                      significantly enhances the corporate IT auditor’s ability
                      to ensure that sensitive information has not left the
                      premises on removable media. It captures full copies of
                      files that are copied to authorized removable devices,
                      Windows Mobile, iPhone and Palm OS-based PDAs and
                      smartphones, burned to CD/DVD or even printed by
                      authorized end users. Shadow copies are stored on a
                      centralized component of an existing server and any
                      existing ODBC-compliant SQL infrastructure of the
                      customer’s choosing.
                    </p>
                    <p className="mb-3 not-animated" data-animate="fadeInUp">
                      DeviceLock® Enterprise Server can monitor remote computers
                      in real-time, checking DeviceLock® Service status (running
                      or not), policy consistency and integrity. The detailed
                      information is written to the Monitoring log. Also, it is
                      possible to define a master policy that can be
                      automatically applied across selected remote computers in
                      the event that their current policies are suspected to be
                      out-of-date or damaged.
                    </p>
                    <p className="mb-3 not-animated" data-animate="fadeInUp">
                      DeviceLock® Content Security Server is an optional
                      component of DeviceLock®. It includes Search Server which
                      provides full-text searching of logged data stored on
                      DeviceLock® Enterprise Server. The full-text search
                      functionality is especially useful in situations when you
                      need to search for shadow copies of documents based on
                      their contents.
                    </p>
                    <p className="mb-3 not-animated" data-animate="fadeInUp">
                      DeviceLock® allows you to generate a report concerning the
                      permissions that have been set. You can see which users
                      are assigned for what device and what devices are on the
                      USB white list on all the computers across your network.
                    </p>
                    <p className="mb-3 not-animated" data-animate="fadeInUp">
                      DeviceLock® provides a level of precision control over
                      device resources unavailable via Windows Group Policy -
                      and it does so with an interface that is seamlessly
                      integrated into the Windows Group Policy Editor. As such,
                      it’s easier to implement and manage across a large number
                      of workstations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section client-slide">
              <div className="container clearfix">
                <div className="row justify-content-between align-items-center">
                  <h4 className="mb-2 not-animated" data-animate="fadeInUp">
                    With DeviceLock® you can:
                  </h4>
                  <div
                    className="pt-2 features not-animated"
                    data-animate="fadeInUp"
                  >
                    <ul className="iconlist iconlist-color nobottommargin">
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Control
                        which users or groups can access USB, FireWire,
                        Infrared, COM and LPT ports; WiFi and Bluetooth
                        adapters; any type of printer, including local, network
                        and virtual printers; Windows Mobile, BlackBerry, iPhone
                        and Palm OS-based PDAs and smartphones; aswell as
                        DVD/CD-ROMs, floppy drives, and other removable and
                        Plug-and-Play devices.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" />{" "}
                        Selectively grant or deny access to certain true file
                        types for removable media.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Control
                        access to devices depending on the time of day and day
                        of the week.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Define
                        which types of data (files, calendars, emails, tasks,
                        notes, etc.) are allowed to synchronize between
                        corporate PCs and personal mobile devices.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Define
                        different online vs. offline security policies for the
                        same user or set of users.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Detect
                        encrypted PGP®, DriveCrypt and TrueCrypt disks (USB
                        Flash Drives and other removable media) as well as
                        Lexar® SAFE PSD and Lexar® JumpDrive SAFE S3000
                        encrypted flash drives and apply special "encrypted"
                        permissions to them.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Authorize
                        only specific USB devices that will not be locked
                        regardless of any other settings.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Grant
                        users temporary access to USB devices when there is no
                        network connection (you provide users with the special
                        access codes over the phone that temporarily unlock
                        access to requested devices).
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Uniquely
                        identify a specific DVD/CD-ROM disk by the data
                        signature and authorize access to it, even when
                        DeviceLock® has otherwise blocked the DVD/CD-ROM drive.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Protect
                        against users with local administrator privileges so
                        they can't disable DeviceLock® Service or remove it from
                        their computers, if they are not in the list of
                        DeviceLock® administrators.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Search of
                        text across shadowed files and audit logs stored in the
                        centralized database.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Set
                        devices in read-only mode.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Protect
                        disks from accidental or intentional formatting.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Detect and
                        block hardware keyloggers (USB and PS/2).
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Deploy
                        permissions and settings via Group Policy in an Active
                        Directory domain.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Use the
                        standard Windows RSoP snap-in to view the DeviceLock®
                        policy currently being applied, as well as to predict
                        what policy would be applied in a given situation.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Control
                        everything remotely using the centralized management
                        console.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Get a
                        complete log of port and device activity, such as
                        uploads and downloads by users and filenames in the
                        standard Windows Event Log.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Mirror all
                        data (shadowing) copied to external storage devices
                        (removable, floppy, DVD/CD-ROM), Windows Mobile, iPhone
                        or Palm OS PDAs and smartphones, transferred via COM and
                        LPT ports and even printed.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Store
                        shadow data on a centralized component of an existing
                        server and any existing ODBC-compliant SQL
                        infrastructure.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Monitor
                        remote computers in real-time, checking DeviceLock®
                        Service status (running or not), policy consistency and
                        integrity.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Generate a
                        report concerning the permissions and settings that have
                        been set.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Make
                        graphical reports based on the logs (audit and shadow)
                        stored on the server.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Generate a
                        report displaying the USB, FireWire and PCMCIA devices
                        currently connected to computers and those that were
                        connected.
                      </li>
                      <li className="box-shadow mb-3">
                        <i className="icon-line-circle-check pb-2" /> Create a
                        custom MSI package for DeviceLock® Service with
                        predefined policies.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* #content end */}
      </div>
    </div>
  );
};

export default DataLeakProtection;
