// /app/contact/Map.tsx
"use client";

export default function Map() {
    return (
        <div className="mt-3 w-full mb-10">
            <div className="h-64 rounded-lg overflow-hidden">
                <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK_HERE"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            {/* Contact Information */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-center">Aranest</h2>
                <p className="mt-1 text-gray-600">
                    <strong>Contact Number:</strong> +1 (123) 456-7890
                </p>
                <p className="mt-1 text-gray-600">
                    <strong>Email:</strong> info@aranest.com
                </p>
                <p className="mt-1 text-gray-600">
                    <strong>Address:</strong> 123 Sample Street, Sample City, SC 12345.
                </p>
            </div>
        </div>
    );
}