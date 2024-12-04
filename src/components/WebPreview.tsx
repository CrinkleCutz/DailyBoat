export function WebPreview() {
  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-xl font-semibold mb-4">Current Snow Conditions</h2>
      <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-800">
        <iframe
          src="https://www.steamboat.com/the-mountain/mountain-report#/snow-report"
          className="w-full h-[600px]"
          title="Steamboat Snow Conditions"
          sandbox="allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  )
}